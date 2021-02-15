interface IProps {
  goToStepByIndex: (i: number) => void
  stepNames: string[]
}

export const StepNavigation: React.FC<IProps> = ({goToStepByIndex, stepNames}) => {
  return (
    <div className="step-navigation">
      {stepNames.map((name, i) => (
        <div
          key={i}
          onClick={() => goToStepByIndex(i)}>
            {name}
        </div>
      ))}
    </div>
  )
}