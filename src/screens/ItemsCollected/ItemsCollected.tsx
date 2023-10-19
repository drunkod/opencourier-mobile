import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Text, FlatList } from 'react-native';
import { Images } from '@app/utilities/images';
import { styles } from './ItemsCollected.styles';
import { MainScreenProp, MainScreens } from '@app/navigation/main/types';
import { BackNavButton } from '@app/components/BackNavButton/BackNavButton';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '@app/styles/colors';
import { OrderItem } from '@app/types/types';
import { OrderItemCell } from '@app/components/OrderItemCell/OrderItemCell';
import { Button, ButtonType } from '@app/components/Button/Button';

type Props = MainScreenProp<MainScreens.ItemsCollected>;

type CollectedItem = {
  item: OrderItem;
  selected: boolean;
};

export const ItemsCollected = ({ navigation, route }: Props) => {
  const { top } = useSafeAreaInsets();
  const { items } = route.params;
  const [dataSource, setDataSource] = useState<CollectedItem[]>([]);
  const [allCollected, setAllCollected] = useState<boolean>(false);

  useEffect(() => {
    const data = items.map(item => {
      return { selected: false, item: item };
    });
    setDataSource(data);
  }, [items]);

  const handleItemPress = (item: CollectedItem) => {
    var temp = [...dataSource];
    temp = temp.map(obj => {
      if (item.item.name === obj.item.name) {
        return { selected: !obj.selected, item: obj.item };
      }
      return obj;
    });
    setDataSource(temp);
  };

  const onAllItemsCollected = () => {
    navigation.goBack();
  };

  const renderItem = ({ item }: { item: CollectedItem }) => {
    return (
      <OrderItemCell
        selected={item.selected}
        item={item.item}
        onPress={() => handleItemPress(item)}
      />
    );
  };

  useEffect(() => {
    const notCollected = dataSource.filter(item => item.selected === false);
    setAllCollected(notCollected.length === 0);
  }, [dataSource]);

  return (
    <View style={styles.container}>
      <LinearGradient
        style={[styles.gradient, { height: top + 100 }]}
        colors={Colors.onlineGradientArray}
      />
      <SafeAreaView style={styles.safe}>
        <View style={styles.navHeader}>
          <Text style={styles.title}>Order Items</Text>
          <BackNavButton onPress={() => navigation.goBack()} />
        </View>
        <Text style={styles.subtitle}>Ensure all items are collected.</Text>
        <View style={styles.separator} />
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={dataSource}
          renderItem={renderItem}
        />
        <View style={styles.separator} />
        <OrderItemCell
          style={{ marginVertical: 22 }}
          selected={false}
          item={{ name: 'Cola Soda' }}
          onPress={() => undefined}
        />
        <Button
          disabled={!allCollected}
          style={{ marginBottom: 16 }}
          textStyle={{ fontSize: 20, fontWeight: '700' }}
          type={ButtonType.green}
          icon={Images.Hamburger}
          title="Confirm items"
          onPress={onAllItemsCollected}
        />
      </SafeAreaView>
    </View>
  );
};
