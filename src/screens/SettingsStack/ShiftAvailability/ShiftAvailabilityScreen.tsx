import React, { useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { styles } from './ShiftAvailabilityScreen.styles';
import { MainScreenProp, MainScreens } from '@app/navigation/main/types';
import { BackNavButton } from '@app/components/BackNavButton/BackNavButton';
import { useTranslation } from 'react-i18next';
import { Organization, ShiftAvailability, ShiftRange } from '@app/types/types';
import { ShiftCell } from '@app/components/ShiftCell/ShitCell';
import moment from 'moment';
import { formatShift } from '@app/utilities/dates';
import { TEST_ORG_ARRAY } from '@app/utilities/testData';
import { Images } from '@app/utilities/images';
import { RootScreen } from '@app/navigation/types';
import DatePicker from 'react-native-date-picker';

type Props = MainScreenProp<MainScreens.ShiftAvailabilityScreen>;

export const ShiftAvailabilityScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const [selectedOrg, setSelectedOrg] = useState<Organization>(
    TEST_ORG_ARRAY[0],
  );
  const [showModal, setShowModal] = useState<boolean>(false);
  const [dayToAddShiftTo, setDayToAddShiftTo] = useState<{
    startOrEnd: 'start' | 'end';
    shift: ShiftAvailability;
  }>();
  const [shiftToAdd, setShiftToAdd] = useState<{
    start: string | undefined;
    end: string | undefined;
  }>({
    start: undefined,
    end: undefined,
  });
  const [selectedPickerDate, setSelectedPickerDate] = useState<Date>(
    new Date(),
  );
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [dataSource, setsDataSource] = useState<ShiftAvailability[]>([
    {
      day: 'Monday',
      shifts: [
        {
          start: moment().subtract(1, 'hours').format(formatShift),
          end: moment().format(formatShift),
        },
      ],
    },
    {
      day: 'Tuesday',
      shifts: [],
    },
    {
      day: 'Wednesday',
      shifts: [],
    },
    {
      day: 'Thursday',
      shifts: [],
    },
    {
      day: 'Friday',
      shifts: [],
    },
    {
      day: 'Saturday',
      shifts: [],
    },
    {
      day: 'Sunday',
      shifts: [],
    },
  ]);

  const isDaySelected = (item: ShiftAvailability) => {
    return selectedDays.includes(item.day);
  };

  const onSelect = (item: ShiftAvailability) => {
    const included = selectedDays.filter(obj => obj === item.day);
    if (included.length > 0) {
      const newData = selectedDays.filter(obj => obj !== item.day);
      setSelectedDays(newData);
    } else {
      var newData = [...selectedDays];
      newData.push(item.day);
      setSelectedDays(newData);
    }
  };

  const handleDelete = (item: ShiftAvailability, range: ShiftRange) => {
    const newDataSource = dataSource.map(obj => {
      if (item.day === obj.day) {
        const newShifts = obj.shifts.filter(
          shift => shift.start !== range.start && shift.end !== range.end,
        );
        return {
          day: obj.day,
          shifts: newShifts,
        };
      }
      return obj;
    });
    setsDataSource(newDataSource);
  };

  const renderItem = ({
    item,
    index,
  }: {
    item: ShiftAvailability;
    index: number;
  }) => {
    return (
      <ShiftCell
        style={{ marginBottom: 16 }}
        item={item}
        onSelect={onSelect}
        isSelected={isDaySelected(item)}
        onAdd={() => {
          setDayToAddShiftTo({ startOrEnd: 'start', shift: item });
        }}
        onDelete={handleDelete}
      />
    );
  };

  useEffect(() => {
    if (dayToAddShiftTo !== undefined) {
      setShiftToAdd({ start: undefined, end: undefined });
      setShowModal(true);
    }
  }, [dayToAddShiftTo]);

  useEffect(() => {
    setShowModal(false);
    if (selectedPickerDate !== undefined) {
      if (shiftToAdd.start === undefined) {
        setShiftToAdd({
          start: moment(selectedPickerDate).format(formatShift),
          end: undefined,
        });
      } else if (shiftToAdd.end === undefined) {
        setShiftToAdd({
          start: shiftToAdd.start,
          end: moment(selectedPickerDate).format(formatShift),
        });
      }
    }
  }, [selectedPickerDate]);

  useEffect(() => {
    if (
      shiftToAdd.start === undefined &&
      shiftToAdd.end === undefined &&
      dayToAddShiftTo !== undefined
    ) {
      setShowModal(true);
    }
    if (
      shiftToAdd.start !== undefined &&
      shiftToAdd.end === undefined &&
      dayToAddShiftTo !== undefined
    ) {
      setShowModal(true);
    }
    if (
      shiftToAdd.start !== undefined &&
      shiftToAdd.end !== undefined &&
      dayToAddShiftTo !== undefined
    ) {
      const day = dayToAddShiftTo?.shift.day;
      const newDataSource = dataSource.map(obj => {
        if (obj.day === day) {
          const newShifts = obj.shifts;
          newShifts.push({
            start: shiftToAdd.start,
            end: shiftToAdd.end,
          });
          return {
            day: day,
            shifts: newShifts,
          };
        }
        return obj;
      });
      setsDataSource(newDataSource);
      setShiftToAdd({ start: undefined, end: undefined });
      setDayToAddShiftTo(undefined);
    }
  }, [shiftToAdd]);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safe}>
        <View style={styles.navHeader}>
          <BackNavButton onPress={() => navigation.goBack()} />
          <Text style={styles.title}>
            {t('translations:shift_availability')}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(RootScreen.SelectOrganizationModal, {
              preselected: selectedOrg,
              onOrganizationSelect: org => setSelectedOrg(org),
            })
          }
          style={styles.org}>
          <Image
            source={{ uri: selectedOrg.imageUrl }}
            style={styles.iconOrg}
          />
          <Text style={styles.textOrg}>{selectedOrg.name}</Text>
          <Image source={Images.Dropdown} />
        </TouchableOpacity>
        <FlatList
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          data={dataSource}
          renderItem={renderItem}
        />
        <DatePicker
          modal
          open={showModal}
          title={
            shiftToAdd?.start === undefined
              ? `Select the start of your ${dayToAddShiftTo?.shift.day} shift`
              : `Select the end of your ${dayToAddShiftTo?.shift.day} shift`
          }
          mode={'time'}
          minimumDate={
            shiftToAdd?.start !== undefined
              ? moment(shiftToAdd.start, formatShift).toDate()
              : undefined
          }
          date={selectedPickerDate}
          onConfirm={setSelectedPickerDate}
          onCancel={() => undefined}
        />
      </SafeAreaView>
    </View>
  );
};
