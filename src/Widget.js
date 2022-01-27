import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';

const WidgetContainer = () => {
  const [widgets, setWidgets] = useState([]);

  useEffect(() => {
    fetch('/widgets').then((response) => {
      setWidgets(response.data);
    }).catch(err => console.log(err));
  }, []);

  return (
    <View>
      {widgets.map((widget) => (
        <Text key={widget.id}>{widget.name}</Text>
      ))}
    </View>
  );
};

export default WidgetContainer;