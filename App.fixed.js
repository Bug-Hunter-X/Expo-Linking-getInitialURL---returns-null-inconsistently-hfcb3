```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

function App() {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const getInitialUrl = async () => {
      const url = await Linking.getInitialURL();
      setInitialUrl(url);
    };

    getInitialUrl();

    const handleUrlChange = ({ url }) => {
      setInitialUrl(url);
    };

    const subscription = Linking.addEventListener('url', handleUrlChange);

    return () => subscription.remove();
  }, []);

  return (
    <View>
      {initialUrl ? (
        <Text>Deep link received: {initialUrl}</Text>
      ) : (
        <Text>No deep link received.</Text>
      )}
    </View>
  );
}

export default App; 
```