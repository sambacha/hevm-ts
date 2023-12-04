#!/usr/bin/env bash


# https://raw.githubusercontent.com/ethereum/consensus-specs/dev/specs/phase0/
function downloadWget() {
    wget -r -np -nH https://raw.githubusercontent.com/ethereum/consensus-specs/dev/specs/phase0/"$1"
}


EthSpecs=(
    'beacon-chain.md',
    'fork-choice.md',
    'validator.md',
    'weak-subjectivity.md'
  )
  
  for specs in $EthSpecs; do
  downloadWget $specs
  echo "Downloaded $specs"
done
sleep 1

exit 0
