import React from 'react'

const Status = ({ output }) => {
  return (
    <div>
      {output && (
        <div>
          <p>There are {output.prepositions.length} prepositions in the text</p>
          <p>There are {output.verbs.length} verbs in the text</p>
          <p>
            There are {output.subjuntiveVerbs.length} subjunctive verbs in the
            text
          </p>
          <p>Vocabulary list:</p>
          <p>
            <textarea
              rows="20"
              cols="50"
              value={output.orderedText.reduce(
                (acc = 0, word) => `${acc} ${word}`
              )}
            />
          </p>
          <p>
            There are {output.filteredValues.length} distinct pretty numbers in
            the text
          </p>
        </div>
      )}
    </div>
  )
}
export default Status
