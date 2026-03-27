import type { Meta, StoryObj } from '@storybook/vue3-vite'

import Task from './Task.vue'
import { TaskData } from './Task.stories'

const meta = {
  title: 'Example/Page',
  component: Task,
  tags: ['autodocs'],
} satisfies Meta<typeof Task>

export default meta
type Story = StoryObj<typeof meta>

export const DocsFallback: Story = {
  name: 'Page',
  args: {
    task: TaskData,
    ...TaskData.events,
  },
}

