export async function fontAsync() {
    let stylesheet = StyleSheet.create({
      Nunito: {
        ...Expo.Font.style('Nunito'),
      },
    });
  
    await Expo.Font.loadAsync({
      'Nunito': require('../assets/fonts/Nunito/Nunito-Regular.ttf'),
    });
}