import Dogs from './Dogs'

export default function DogList({ values, toggleValue }) {
  return (
    values.map(value => {
      return <Dogs key={value.id} toggleValue={toggleValue} value={value} />
    })
  )
}