<template>
  <l-textarea name="标签文字" placeholder="请输入文字" :autosize="true" @line-change="(v, e) => console.log('lineCount: ', v, e)" />
</template>
