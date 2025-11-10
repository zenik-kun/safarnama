import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Pressable, ScrollView, Text, TextInput, View } from 'react-native';

export default function BookingScreen() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    roomType: 'Standard',
    numRooms: '1',
    requests: ''
  });

  const handleSubmit = () => {
    if (!formData.firstName || !formData.email || !formData.phone) {
      Alert.alert('Required Fields', 'Please fill in all required fields.');
      return;
    }
    Alert.alert(
      'Booking Confirmed!',
      'Enjoy your journey! We will send confirmation details to your email.',
      [{ text: 'OK', onPress: () => router.back() }]
    );
  };

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <View className="flex-1 bg-gray-50">
      <StatusBar style="light" />
      {/* Header */}
      <View className="bg-primary pt-12 pb-6 px-6">
        <Text className="text-white text-3xl font-gbold mb-2">Booking</Text>
        <Text className="text-white/90 font-gmedium text-sm">Fill in your details to complete your booking</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        <View className="px-6 pt-6">
          {/* Personal Info Section */}
          <View className="bg-white rounded-2xl p-5 mb-4 shadow shadow-black/5">
            <View className="flex-row items-center mb-4">
              <MaterialIcons name="person" size={22} color="#7c3aed" />
              <Text className="ml-2 text-lg font-gbold">Personal Information</Text>
            </View>

            <Text className="text-xs font-gmedium text-gray-700 mb-1">First Name *</Text>
            <TextInput
              value={formData.firstName}
              onChangeText={(v) => updateField('firstName', v)}
              placeholder="Enter first name"
              className="border border-gray-300 rounded-lg px-4 py-3 mb-4 font-gregular"
              placeholderTextColor="#999"
            />

            <Text className="text-xs font-gmedium text-gray-700 mb-1">Last Name *</Text>
            <TextInput
              value={formData.lastName}
              onChangeText={(v) => updateField('lastName', v)}
              placeholder="Enter last name"
              className="border border-gray-300 rounded-lg px-4 py-3 mb-4 font-gregular"
              placeholderTextColor="#999"
            />

            <Text className="text-xs font-gmedium text-gray-700 mb-1">Email *</Text>
            <TextInput
              value={formData.email}
              onChangeText={(v) => updateField('email', v)}
              placeholder="your@email.com"
              keyboardType="email-address"
              autoCapitalize="none"
              className="border border-gray-300 rounded-lg px-4 py-3 mb-4 font-gregular"
              placeholderTextColor="#999"
            />

            <Text className="text-xs font-gmedium text-gray-700 mb-1">Phone Number *</Text>
            <TextInput
              value={formData.phone}
              onChangeText={(v) => updateField('phone', v)}
              placeholder="+91 XXXXX XXXXX"
              keyboardType="phone-pad"
              className="border border-gray-300 rounded-lg px-4 py-3 font-gregular"
              placeholderTextColor="#999"
            />
          </View>

          {/* Stay Details Section */}
          <View className="bg-white rounded-2xl p-5 mb-4 shadow shadow-black/5">
            <View className="flex-row items-center mb-4">
              <MaterialIcons name="calendar-today" size={20} color="#7c3aed" />
              <Text className="ml-2 text-lg font-gbold">Stay Details</Text>
            </View>

            <Text className="text-xs font-gmedium text-gray-700 mb-1">Check-in Date *</Text>
            <TextInput
              value={formData.checkIn}
              onChangeText={(v) => updateField('checkIn', v)}
              placeholder="YYYY-MM-DD"
              className="border border-gray-300 rounded-lg px-4 py-3 mb-4 font-gregular"
              placeholderTextColor="#999"
            />

            <Text className="text-xs font-gmedium text-gray-700 mb-1">Check-out Date *</Text>
            <TextInput
              value={formData.checkOut}
              onChangeText={(v) => updateField('checkOut', v)}
              placeholder="YYYY-MM-DD"
              className="border border-gray-300 rounded-lg px-4 py-3 mb-4 font-gregular"
              placeholderTextColor="#999"
            />

            <Text className="text-xs font-gmedium text-gray-700 mb-2">Accommodation Type *</Text>
            <View className="flex-row flex-wrap mb-4">
              {['Standard', 'Deluxe', 'Suite'].map(type => (
                <Pressable
                  key={type}
                  onPress={() => updateField('roomType', type)}
                  className={`mr-3 mb-2 px-4 py-2 rounded-full ${
                    formData.roomType === type ? 'bg-primary' : 'bg-gray-200'
                  }`}
                >
                  <Text className={`text-sm font-gsemibold ${
                    formData.roomType === type ? 'text-white' : 'text-gray-700'
                  }`}>{type}</Text>
                </Pressable>
              ))}
            </View>

            <Text className="text-xs font-gmedium text-gray-700 mb-1">Number of Rooms *</Text>
            <View className="flex-row items-center">
              <Pressable
                onPress={() => updateField('numRooms', Math.max(1, parseInt(formData.numRooms || '1') - 1).toString())}
                className="bg-gray-200 rounded-full w-10 h-10 items-center justify-center"
              >
                <MaterialIcons name="remove" size={20} color="#333" />
              </Pressable>
              <Text className="mx-6 text-xl font-gbold">{formData.numRooms}</Text>
              <Pressable
                onPress={() => updateField('numRooms', Math.min(10, parseInt(formData.numRooms || '1') + 1).toString())}
                className="bg-primary rounded-full w-10 h-10 items-center justify-center"
              >
                <MaterialIcons name="add" size={20} color="#fff" />
              </Pressable>
            </View>
          </View>

          {/* Additional Info Section */}
          <View className="bg-white rounded-2xl p-5 mb-4 shadow shadow-black/5">
            <View className="flex-row items-center mb-4">
              <MaterialIcons name="edit-note" size={22} color="#7c3aed" />
              <Text className="ml-2 text-lg font-gbold">Additional Requests</Text>
            </View>

            <TextInput
              value={formData.requests}
              onChangeText={(v) => updateField('requests', v)}
              placeholder="Any special requests? (Optional)"
              multiline
              numberOfLines={4}
              textAlignVertical="top"
              className="border border-gray-300 rounded-lg px-4 py-3 font-gregular"
              placeholderTextColor="#999"
            />
          </View>

          {/* Submit Button */}
          <Pressable
            onPress={handleSubmit}
            className="bg-primary rounded-2xl py-4 shadow-lg shadow-primary/30 flex-row items-center justify-center"
          >
            <MaterialIcons name="check-circle" size={24} color="#fff" />
            <Text className="text-white text-lg font-gbold ml-2">Submit Booking</Text>
          </Pressable>

          {/* Footer */}
          <View className="mt-8 pt-6 border-t border-gray-200">
            <Text className="text-center text-xs text-gray-500 font-gregular">
              Copyright © 2025 SAFARNAMA All Rights Reserved.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
