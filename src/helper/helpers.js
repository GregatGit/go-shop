
//  capitalize and remove underscore
export const displayName = (name) => {
  return name.replace(/_/g, " ").toUpperCase()
}