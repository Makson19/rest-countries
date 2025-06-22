
export function slicer<T>(items: T[], max: number): T[][] {
  return items?.reduce((acc: T[][], item, index) => {
    const group = Math.floor(index / max)
    acc[group] = [...(acc[group] || []), item]
    return acc
  }, [])
}
