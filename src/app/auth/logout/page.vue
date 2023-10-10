<script setup lang="ts">
import { useRouter } from 'vue-router'
import  Cookie from 'js-cookie'
useRouter().push('/auth/login')
Cookie.remove('token')
</script>