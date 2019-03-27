/**
 * Here's the first line of the TSDoc comment.
 *
 * This is the meat of the TSDoc comment. It may contain
 * multiple lines and multiple paragraphs.
 *
 * Multiple paragraphs are separated by an empty line.
 *
 * @beta
 */
export class DocumentedClass {

  /**
   * Greet the indicated person.
   *
   * This will print out a friendly greeting intended for
   * the indicated person.
   *
   * @param greetee - The person to be greeted.
   * @returns A number that everyone knows very well
   */
  public greet(greetee: Greetee = {}) {
    process.stdout.write(`Hello, ${greetee.name || 'world'}\n`);
    return 42;
  }
}

/**
 * These are some arguments you can pass to a method.
 */
export interface Greetee {
  /**
   * The name of the greetee
   *
   * @defaultValue world
   */
  readonly name?: string;
}