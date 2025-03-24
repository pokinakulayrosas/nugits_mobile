import React, { useState } from "react";
import { View } from "react-native";
import { Menu, Button } from "react-native-paper";

interface ClearanceSelectProps {
  options: string[];  // Clearance options
  onSelect: (selected: string) => void; // Callback function
}

export default function ClearanceSelect({ options, onSelect }: ClearanceSelectProps) {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState("Select an option");

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const handleSelect = (option: string) => {
    setSelected(option); // Update UI
    onSelect(option); // Send data to parent
    closeMenu();
  };

  return (
    <View style={{ flex: 1, alignItems: "center", marginVertical: 10 }}>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Button mode="outlined" onPress={openMenu}>
            {selected}
          </Button>
        }
        anchorPosition="bottom"
      >
        {options.map((option, index) => (
          <Menu.Item key={index} onPress={() => handleSelect(option)} title={option} />
        ))}
      </Menu>
    </View>
  );
}
