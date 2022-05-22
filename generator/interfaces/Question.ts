export interface Question {
  type: 'react' | 'svelte' | 'vue';
  withTs: boolean;
  name: string;
}
