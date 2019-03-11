import tsdoc = require('@microsoft/tsdoc');
import spec = require('jsii-spec');
import ts = require('typescript');

export function parseSymbolDocumentation(node: ts.Node): DocsParsingResult {
  const parser = new tsdoc.TSDocParser();
  parser.configuration.addTagDefinitions([]);

  const warnings = new Array<string>();
  const errors = new Array<string>();
  const docs = {};

  const jsdocs = getJSDocCommentRanges(node);
  if (jsdocs.length > 1) {
    warnings.push('jsii compiler has not been built to deal with more than one JSDoc comment. Docs may be incorrect.');
  }

  for (const jsdoc of jsdocs) {
    const context = parser.parseRange(jsdoc);
    Object.assign(docs, tsdocToJsii(context.docComment));

    /*
    for (const message of context.log.messages) {
      errors.push(message.text);
    }
    */
  }

  return { docs, warnings, errors };
}

export interface DocsParsingResult {
  docs: spec.Docs;
  warnings?: string[];
  errors?: string[];
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