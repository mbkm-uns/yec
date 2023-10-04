import { defineComponent } from 'vue';
import { useMessage } from 'naive-ui';

export default defineComponent({
setup() {
const message = useMessage();
return {
options: [
{
icon: renderIcon(UserIcon),
label: 'Setting Profile',
key: 'Setting Profile',
// disabled: true
},
{
label: "Bimbingan Prakerja",
key: "Bimbingan Prakerja"
},
{
label: 'Subskripsi',
key: 'Subskripsi'
},
{
label: 'Logout',
key: 'Logout'
}
],
handleSelect(key: string | number) {
message.info(String(key));
}
};
}
});
