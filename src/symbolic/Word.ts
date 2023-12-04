import { Symbols } from "./Symbols";
let BN = require("bn.js");

/**
 * Represents a word, which can be either symbolic or literal.
 */
export class Word {
  /**
   * A boolean property that indicates whether the word is symbolic or not.
   * It is initially set to false in the constructor.
   */
  isSymbolic: boolean;
  constructor() {
    this.isSymbolic = false;
  }
  static WORD_LENGTH_IN_BYTES = 32;

  /**
   * An optional property that stores the literal value of the word.
   * It is of type any.
   */

  value?: any;

  /**
   * An optional property that stores the symbolic value of the word.
   * It is of type Symbols, which is imported from the './Symbols' module.
   */
  symbol?: Symbols;

  /**
   * Creates a literal word with the given hexadecimal string value.
   * @param {string} valueHex - The hexadecimal string value.
   * @returns {Word} - A new Word object with isSymbolic set to FALSE
   * and value set to a new BN (Big Number) object created from the given hexadecimal value.
   */
  static createLiteral(valueHex: string): Word {
    return { isSymbolic: false, value: new BN(valueHex, 16) } as Word;
  }

  /**
   * Creates a symbolic word with the given Symbols object.
   * @param {Symbols} symbol - The Symbols object.
   * @returns {Word} - A new Word object with isSymbolic set to TRUE
   */
  static createSymbolic(symbol: Symbols): Word {
    return { isSymbolic: true, symbol: symbol } as Word;
  }
}
