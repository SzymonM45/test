type Props = {
  name: string
}
const App = ({ name }: Props) => {
  const a = 10

  return (
    <div>
      {name} {a}
    </div>
  )
}

export { App }
