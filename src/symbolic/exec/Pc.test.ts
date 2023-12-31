import { createExecutor, createEVMDisassembler } from "./TestUtils";
import { EVMExecutor } from "../EVMExecutor";
import { EthereumCFGCreator } from "@/../cfg/EthereumCFGCreator";
import { Disassembler } from "@/../bytecode/Disassembler";
import { OpcodeExecutor } from "./OpcodeExecutor";
import { EVMDisassembler } from "@/../bytecode/EVMDisassembler";
import { Word } from "../Word";
import { Symbols } from "../Symbols";

describe("Pc", () => {
  let cfgCreator: EthereumCFGCreator;
  let disassembler: Disassembler;
  let opcodeExecutor: OpcodeExecutor = new OpcodeExecutor();

  beforeEach(() => {
    cfgCreator = new EthereumCFGCreator();
    disassembler = createEVMDisassembler();
  });

  it("Test Pc", () => {
    const bytecode = "58";
    const executor: EVMExecutor = createExecutor(
      disassembler,
      bytecode,
      cfgCreator,
      opcodeExecutor,
    );
    executor.run(0);
    expect(executor.evm.stack.get(0)).toEqual(Word.createLiteral("00"));
    expect(executor.evm.stack.length()).toEqual(1);
  });

  it("Test Pc higher offset", () => {
    const bytecode = "604061112258";
    const executor: EVMExecutor = createExecutor(
      disassembler,
      bytecode,
      cfgCreator,
      opcodeExecutor,
    );
    executor.run(0);
    expect(executor.evm.stack.get(0)).toEqual(Word.createLiteral("05"));
    expect(executor.evm.stack.length()).toEqual(3);
  });
});
