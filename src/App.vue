<script setup lang="ts">
import { ref } from 'vue'

import type { TaskData } from './types'

import TaskList from './components/TaskList.vue'

const tasks = ref<TaskData[]>([
  { id: '1', title: 'Task 1', state: 'TASK_INBOX' },
  { id: '2', title: 'Task 2', state: 'TASK_INBOX' },
  { id: '3', title: 'Task 3', state: 'TASK_INBOX' },
  { id: '4', title: 'Task 4', state: 'TASK_INBOX' },
  { id: '5', title: 'Task 5', state: 'TASK_INBOX' },
  { id: '6', title: 'Task 6', state: 'TASK_INBOX' },
])

function onArchiveTask(id: string) {
  const task = tasks.value.find((t) => t.id === id)
  if (task) task.state = 'TASK_ARCHIVED'
}

function onPinTask(id: string) {
  const task = tasks.value.find((t) => t.id === id)
  if (!task) return
  task.state = task.state === 'TASK_PINNED' ? 'TASK_INBOX' : 'TASK_PINNED'
}
</script>

<template>
  <div class="page lists-show">
    <nav>
      <h1 class="title-page">Taskbox</h1>
    </nav>
    <main class="app-main">
      <TaskList :tasks="tasks" @archive-task="onArchiveTask" @pin-task="onPinTask" />
    </main>
  </div>
</template>

<style scoped>
.app-main {
  max-width: 36rem;
  margin: 0 auto;
  padding: 1rem 1.25rem 2rem;
}
</style>
