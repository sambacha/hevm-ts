import { createExecutor, createEVMDisassembler } from "./TestUtils";
import { EVMExecutor } from "../EVMExecutor";
import { EthereumCFGCreator } from "@/../cfg/EthereumCFGCreator";
import { Disassembler } from "@/../bytecode/Disassembler";
import { OpcodeExecutor } from "./OpcodeExecutor";
import { EVMDisassembler } from "@/../bytecode/EVMDisassembler";
import { Word } from "../Word";
import { Symbols } from "../Symbols";

describe("Returndatacopy", () => {
  let cfgCreator: EthereumCFGCreator;
  let disassembler: Disassembler;
  let opcodeExecutor: OpcodeExecutor = new OpcodeExecutor();

  beforeEach(() => {
    cfgCreator = new EthereumCFGCreator();
    disassembler = createEVMDisassembler();
  });

  it("Test Returndatacopy", () => {
    const bytecode = "6010602060303e";
    const executor: EVMExecutor = createExecutor(
      disassembler,
      bytecode,
      cfgCreator,
      opcodeExecutor,
    );
    executor.run(0);
    expect(executor.evm.stack.get(0)).toEqual(
      Word.createSymbolic(Symbols.RETURNDATACOPY),
    );
    expect(executor.evm.stack.length()).toEqual(1);
  });
});
