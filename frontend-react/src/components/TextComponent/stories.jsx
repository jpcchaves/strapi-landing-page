import { TextComponent } from ".";

export default {
  title: "TextComponent",
  component: TextComponent,
  args: {
    children: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam sint debitis officia eum harum ullam placeat! Impedit aliquam reprehenderit est magnam quas omnis modi, repellendus, fugiat aperiam, voluptatem ipsam! Necessitatibus!`,
  },
  argTypes: {
    children: { type: "string" },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
