import { Executor } from "./Executor";
import { EVM } from "../EVM";
import { Operation } from "@/../bytecode/Operation";
import { Word } from "../Word";
import { Symbols } from "../Symbols";
import { UintUtils } from "../UintUtils";

export class Shl implements Executor {
  execute(op: Operation, evm: EVM) {
    const operand1 = evm.stack.pop();
    const operand2 = evm.stack.pop();
    if (!operand1 || !operand2) {
      evm.stack.push(Word.createSymbolic(Symbols.UNKNOWN));
      return;
    }
    if (!operand1.isSymbolic && !operand2.isSymbolic) {
      const op1Value = operand1.value;
      const op2Value = operand2.value;
      if (op1Value.gten(256)) {
        evm.stack.push(Word.createLiteral("00"));
        return;
      }

      let result = op2Value
        .shln(op1Value.toNumber())
        .iand(UintUtils.MAX_INTEGER);
      evm.stack.push(Word.createLiteral(result.toString(16)));
    } else {
      evm.stack.push(Word.createSymbolic(Symbols.UNKNOWN));
    }
  }
}
