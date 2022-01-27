import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import api from './api';

const WidgetContainer = () => {
  const [widgets, setWidgets] = useState([]);

  useEffect(() => {
    api.get('/widgets').then((response) => {
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