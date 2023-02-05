import "styled-components";
import { colors } from "./index";

export type Theme = typeof colors;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
