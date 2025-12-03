<template>
  <div class="form-group">
    <label :for="id">{{ label }}</label>
    <input
      :type="type"
      :id="id"
      :value="modelValue"
      class="form-input"
      :placeholder="placeholder"
      :required="required"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'LoginInput',
  props: {
    id: String,
    label: String,
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    modelValue: String,
    required: Boolean
  },
  emits: ['update:modelValue']
};
</script>
  