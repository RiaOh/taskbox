/** Task 스토리 파일  */
import { fn } from "@storybook/test";

import Task from "./Task";

export const ActionsData = {
  // Data로 끝나므로 story가 아님
  onArchiveTask: fn(),
  onPinTask: fn(),
};

// component
export default {
  component: Task, // 컴포넌트
  title: "Task", // storybook 사이드바 카테고리
  tags: ["autodocs"], // 문서 자동생성
  excludeStories: /.*Data$/, // 'Data'로 끝나는 건 story가 아님
  args: {
    // 컴포넌트로 넘어가는 인수들
    // 모든 story에 적용된다.
    ...ActionsData,
  },
};

// component 하위 story : 상태별로 story를 나눔
export const Default = {
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX",
    },
  },
};

export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_PINNED",
    },
  },
};

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED",
    },
  },
};
