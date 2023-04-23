import React, { FC, useState, useCallback } from 'react'

const GuessNum: FC = () => {
  const [step, setStep] = useState('giveNum') // giveNum => gusessNum => finished
  const [targetNum, setTargetNum] = useState<number | null>(null)
  const [guessNum, setGuessNum] = useState<number | null>(null)
  const [min, setMin] = useState(1)
  const [max, setMax] = useState(100)
  const [res, setRes] = useState('')

  const confirmGiveNum = useCallback(() => {
    setStep('guessNum')
  }, [])

  const confirmGuessNum = useCallback(() => {
    if (guessNum === targetNum) {
      setStep('finished')
    } else if (guessNum > targetNum) {
      setMax(Math.min(guessNum, max))
      setRes(`猜大了`)
    } else {
      setMin(Math.max(guessNum, min))
      setRes('猜小了')
    }
    setGuessNum('')
  }, [targetNum, guessNum])

  const renderGiveNum = () => (
    <div className='space-x-2 '>
      <span>请给出数字:</span>
      <input
        value={targetNum}
        onChange={e => setTargetNum(parseInt(e.target.value, 10))}
        placeholder='1 ~ 100 之间的数字'
      />
      <button onClick={confirmGiveNum}>确定</button>
    </div>
  )

  const renderGuessNum = () => (
    <div>
      <div className='space-x-2'>
        <span>请猜数字:</span>
        <input
          value={guessNum}
          onChange={e => setGuessNum(parseInt(e.target.value, 10))}
          placeholder='0 ~ 100 之间的数字'
        />
        <button onClick={confirmGuessNum}>确定</button>
      </div>
      {res !== '' && <div className='mt-2 text-sm'>{res}: {min} ~ {max}</div>}
    </div>
  )
  return (
    <div>
      {step === 'giveNum' && renderGiveNum()}
      {step === 'guessNum' && renderGuessNum()}
      {step === 'finished' && "恭喜你，答对了"}
    </div>
  )
}
export default React.memo(GuessNum)
