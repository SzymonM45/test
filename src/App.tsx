type Props = {
  name: string
}
const App = ({ name }: Props) => {
  const a: string = 'Dolor sit amet and lorem opsum'

  return (
    <div>
      {name}
    </div>
  )
}

export { App }
