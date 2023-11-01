<script setup lang="ts">
import { useHttpMutation } from "@/composables/http/http";
import { useMessage } from "naive-ui";

const props = defineProps<{ programId: string; topicId: string; activityId: string; url:string }>();
const message = useMessage();
const { mutate: getUnlock, isLoading } = useHttpMutation(
  `/users/v1/member/activity/unlock`,
  {
    method: "POST",
    httpOptions: {
      // axios options
      timeout: 30000,
    },
    queryOptions: {
      // vue-query options

      onError: function (data) {
        // console.log(data)
        message.error(data.data.message);
      },
    },
  }
);

const onDownload = () => {
  getUnlock({
    program_id: props.programId,
    activity_id: props.activityId,
    topic_id: props.topicId,
  });
  window.open(props.url)
};
</script>
<template>
  <div class="pt-20 p-3 md:px-20 space-y-5">
    <div class="text-2xl font-semibold">Instruksi Tugas Praktik Mandiri</div>
    <n-card class="drop-shadow-md" style="width: max-content; height: 500px">
      <div class="flex flex-col items-center justify-center" style="height: 100%">
        <div
          class="text-lg font-semibold"
          style="text-align: center"
        >
          Silahkan unduh file Instruksi berikut untuk mengerjakan tugas praktik mandiri!
        </div>

        <n-icon size="60" color="#8492A6"><i-ic:sharp-cloud-download /></n-icon>
        <a>
          <n-button
            round
            type="primary"
            size="large"
            target="_blank"
            :loading="isLoading"
            @click="onDownload"
            >Download</n-button
          >
        </a>
      </div>
    </n-card>
  </div>
</template>