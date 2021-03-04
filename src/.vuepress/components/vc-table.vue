<template>
  <table>
    <tr>
      <td>
        <slot name="cola">Hi</slot>
      </td>
      <td>
        <slot name="colb">Hiii</slot>
      </td>
    </tr>
  </table>
</template>
<script>
export default {};
</script>
<style scoped>
table {
  border-radius: 1rem;
}
tr {
  display: flex;
  justify-content: space-between;
  border: none;
  background: #222;
}
td {
  width: 50%;
  border: none;
  /* overflow-wrap: break-word; */
}
</style>
