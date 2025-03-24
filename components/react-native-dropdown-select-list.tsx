declare module 'react-native-dropdown-select-list' {
    import React from 'react';
    import { ViewStyle, TextStyle } from 'react-native';
  
    interface SelectListProps {
      data: Array<{ key: string; value: string }>;
      setSelected: (value: string) => void;
      placeholder?: string;
      search?: boolean;
      boxStyles?: ViewStyle;
      dropdownStyles?: ViewStyle;
      inputStyles?: TextStyle;
      dropdownItemStyles?: ViewStyle;
      dropdownTextStyles?: TextStyle;
      onSelect?: () => void;
    }
  
    const SelectList: React.FC<SelectListProps>;
    export default SelectList;
  }