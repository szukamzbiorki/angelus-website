import { onMounted, onUnmounted, ref } from "vue";

export default function useScreenSize() {
  const sizeOfScreen = useState('sizeOfScreen', () => window.innerHeight)

  console.log(sizeOfScreen)

  const resize = () => {
    sizeOfScreen.value = window.innerHeight
  };

  onMounted(() => {
    resize();
    window.addEventListener("resize", resize);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", resize);
  });

  return { sizeOfScreen };
}
