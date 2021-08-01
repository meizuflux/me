export default function Home() {
  const test = [
    ['test', 'wow'],
    ['uhhh', "hmm"]
  ]
  const e = test.map(([b, c], num) => ({b}))

  return (
    {e}
  )
}
