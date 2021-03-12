export default function Dogs({ value, toggleValue }) {
    function handleValueClick() {
      toggleValue(value.id)
    }
    
    return (
      <div>
        <label>
          <input type="checkbox" checked={value.complete} onChange={handleValueClick} />
          {value.nick}
        </label>
      </div>
    )
  }