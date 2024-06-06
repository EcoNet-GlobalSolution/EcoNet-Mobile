import {DrawerNavigationOptions} from "@react-navigation/drawer";
import {IconNameType} from "@/components/DrawerButton";

interface CustomOptions extends DrawerNavigationOptions{
    iconName: IconNameType
}