import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("HelloWorld component renders props.msg when passed", () => {
    const msg = "a message";
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
