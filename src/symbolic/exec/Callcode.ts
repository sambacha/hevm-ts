import { Executor } from './Executor'
import { EVM } from '../EVM'
import { Operation } from '@/../bytecode/Operation'
import { Word } from '../Word'
import { Symbols } from '../Symbols'

export class Callcode implements Executor {
  execute(op: Operation, evm: EVM) {
    evm.stack.pop()
    evm.stack.pop()
    evm.stack.pop()
    evm.stack.pop()
    evm.stack.pop()
    evm.stack.pop()
    evm.stack.pop()
    evm.stack.push(Word.createSymbolic(Symbols.CALLCODE))
  }
}