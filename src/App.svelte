<script lang="ts">
  import { HeroExample } from "./main";
  import { HeaderExample } from "./main";
  import { ThreeColumnExample } from "./main";
  import { TwoColumnExample } from "./main";
</script>

<main>
  <HeaderExample />
  <HeroExample />

  <snt-two-column-feature
    title-string="University alumni can save a bundle on home and auto insurance"
    copy-text="Get an exclusive discount* as a Canadian University Alumni and bundle your home and auto to save even more."
    primary-button-text="Click Here"
    primary-button-action="Action.logAction"
    image-path="https://www.sonnet.ca/dA/9b81471c26/GRP-alumni_graduation_hat@2x.jpg"
  />
  <ThreeColumnExample />
  <TwoColumnExample />
</main>
