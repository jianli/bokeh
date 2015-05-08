define [
  "common/collection",
  "common/has_properties"
], (Collection, HasProperties) ->

  class CategoricalTickFormatter extends HasProperties
    type: 'CategoricalTickFormatter'

    initialize: (attrs, options) ->
      super(attrs, options)

    format: (ticks) ->
      # Ordinarily tick labels are identical to values. This allows
      # the user to specify arbitrary labels. Instead of passing
      # `<value>` to `x` or `y` parameters, pass `<label>*<value>` and
      # they will be displayed as `<label>`.
      labels = (tick.split('*')[0] for tick in ticks)
      # If there are contiguous identical labels, the label will only
      # displayed at the midpoint.
      reduced_labels = []
      console.log labels.length
      if labels.length < 500
        # Display boundary markers if there is enough room.
        FIRST = '▼'
        LAST = '▲'
      else
        FIRST = ''
        LAST = ''

      last_first = null
      for label, i in labels
        first = label != labels[i-1]
        last = label != labels[i+1]
        if first and last
          reduced_labels.push(label)
        else if first
          reduced_labels.push(FIRST)
          last_first = i
        else if last
          reduced_labels.push(LAST)
          # integer division operator is not available
          midpoint = Math.floor((last_first + i) / 2)
          reduced_labels[midpoint] += label
        else
          reduced_labels.push('')
      return reduced_labels

  class CategoricalTickFormatters extends Collection
    model: CategoricalTickFormatter

  return {
    "Model": CategoricalTickFormatter,
    "Collection": new CategoricalTickFormatters()
  }

