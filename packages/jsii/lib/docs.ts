import tsdoc = require('@microsoft/tsdoc');
import spec = require('jsii-spec');
import ts = require('typescript');
import { Diagnostic } from './emitter';

// NOTE: Add support for the '@default' tag, which is in JSDoc but not in TSDoc.
const shortDefaultTag: tsdoc.TSDocTagDefinition = new tsdoc.TSDocTagDefinition({
  tagName: '@default',
  syntaxKind: tsdoc.TSDocTagSyntaxKind.BlockTag,
});

// A tag that is added by cfn2ts
const cloudFormationAttributeTag: tsdoc.TSDocTagDefinition = new tsdoc.TSDocTagDefinition({
  tagName: '@cloudformationAttribute',
  syntaxKind: tsdoc.TSDocTagSyntaxKind.BlockTag,
});

// A tag to refer to a webpage with more documentation
const seeTag: tsdoc.TSDocTagDefinition = new tsdoc.TSDocTagDefinition({
  tagName: '@see',
  syntaxKind: tsdoc.TSDocTagSyntaxKind.BlockTag,
});

const parserConfiguration = new tsdoc.TSDocConfiguration();
parserConfiguration.addTagDefinitions([
  shortDefaultTag,
  cloudFormationAttributeTag,
  seeTag
]);

export function parseSymbolDocumentation(node: ts.Node): DocsParsingResult {
  const parser = new tsdoc.TSDocParser(parserConfiguration);

  const diagnostics = new Array<Diagnostic>();
  const docs = {};

  const jsdocs = getJSDocCommentRanges(node);
  if (jsdocs.length > 1) {
    diagnostics.push({
      messageText: 'jsii compiler has not been built to deal with more than one JSDoc comment. Docs may be incorrect.',
      file: node.getSourceFile(),
      start: jsdocs[1].pos,
      length: jsdocs[1].end - jsdocs[1].pos,
      category: ts.DiagnosticCategory.Warning,
      code: 0,
      domain: 'JSII'
    });
  }

  for (const jsdoc of jsdocs) {
    const context = parser.parseRange(jsdoc);
    Object.assign(docs, tsdocToJsii(context.docComment));

    for (const message of context.log.messages) {
      diagnostics.push({
        messageText: message.text,
        file: node.getSourceFile(),
        start: message.textRange.pos,
        length: message.textRange.end - message.textRange.pos,
        category: ts.DiagnosticCategory.Error,
        code: 0,
        domain: 'TSDOC'
      });
    }
  }

  return { docs, diagnostics };
}

export interface DocsParsingResult {
  docs: spec.Docs;
  diagnostics?: Diagnostic[];
}

/**
 * Retrieves the JSDoc-style comments associated with a specific AST node.
 *
 * Based on ts.getJSDocCommentRanges() from the compiler.
 * https://github.com/Microsoft/TypeScript/blob/v3.0.3/src/compiler/utilities.ts#L924
 */
function getJSDocCommentRanges(node: ts.Node): tsdoc.TextRange[] {
  const text: string = node.getSourceFile().getFullText(); // don't use getText() here!
  const commentRanges: ts.CommentRange[] = [];

  switch (node.kind) {
    case ts.SyntaxKind.Parameter:
    case ts.SyntaxKind.TypeParameter:
    case ts.SyntaxKind.FunctionExpression:
    case ts.SyntaxKind.ArrowFunction:
    case ts.SyntaxKind.ParenthesizedExpression:
      commentRanges.push(...ts.getTrailingCommentRanges(text, node.pos) || []);
      break;
  }
  commentRanges.push(...ts.getLeadingCommentRanges(text, node.pos) || []);

  // True if the comment starts with '/**' but not if it is '/**/'
  const jsdocs = commentRanges.filter((comment) =>
    text.charCodeAt(comment.pos + 1) === 0x2A /* ts.CharacterCodes.asterisk */ &&
    text.charCodeAt(comment.pos + 2) === 0x2A /* ts.CharacterCodes.asterisk */ &&
    text.charCodeAt(comment.pos + 3) !== 0x2F /* ts.CharacterCodes.slash */);

  return jsdocs.map(comment => tsdoc.TextRange.fromStringRange(text, comment.pos, comment.end));
}

/**
 * Convert tsdocs to jsii docs
 */
function tsdocToJsii(_docs: tsdoc.DocComment): spec.Docs {
  return {};
}