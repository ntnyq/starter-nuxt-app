export const useWebsite = () => {
  const app = useAppConfig()
  return computed(() => app.website)
}
