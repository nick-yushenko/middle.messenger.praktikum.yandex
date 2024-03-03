export const template = props => {
  return `
<div class="${props.className}">
    ${props.child}
</div>
`;
};
