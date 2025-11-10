import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ContactScreen() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      Alert.alert('Required Fields', 'Please fill in all required fields (Name, Email, Message)');
      return;
    }
    
    Alert.alert(
      'Message Sent!',
      'Thank you for contacting us. We will get back to you within 24 hours.',
      [{ text: 'OK', onPress: () => router.back() }]
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50" edges={['top']}>
      <StatusBar style="dark" />
      
      {/* Header */}
      <View className="flex-row items-center px-6 py-4 bg-white border-b border-gray-200">
        <Pressable
          onPress={() => router.back()}
          className="bg-gray-100 rounded-full w-10 h-10 items-center justify-center mr-4"
        >
          <Ionicons name="arrow-back" size={22} color="#374151" />
        </Pressable>
        <Text className="text-xl font-gbold text-gray-800">Contact Us</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
        <View className="px-6 py-6">
          {/* Contact Info Cards */}
          <View className="mb-6">
            {[
              { icon: 'mail', title: 'Email Us', info: 'support@safarnama.com', color: '#7c3aed' },
              { icon: 'phone', title: 'Call Us', info: '+91 XXXXX XXXXX', color: '#7c3aed' },
              { icon: 'location-on', title: 'Visit Us', info: 'New Delhi, India', color: '#7c3aed' },
              { icon: 'schedule', title: 'Working Hours', info: 'Mon-Sat: 9AM - 6PM', color: '#7c3aed' },
            ].map((item, index) => (
              <View key={index} className="bg-white rounded-2xl p-4 mb-3 shadow-sm shadow-black/5 flex-row items-center">
                <View 
                  className="rounded-full w-12 h-12 items-center justify-center mr-4"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <MaterialIcons name={item.icon} size={24} color={item.color} />
                </View>
                <View className="flex-1">
                  <Text className="text-sm font-gbold text-gray-800">{item.title}</Text>
                  <Text className="text-sm font-gregular text-gray-600 mt-0.5">{item.info}</Text>
                </View>
              </View>
            ))}
          </View>

          {/* Contact Form */}
          <View className="bg-white rounded-2xl p-6 mb-6 shadow-sm shadow-black/5">
            <Text className="text-lg font-gbold text-gray-800 mb-4">Send us a Message</Text>
            
            {/* Name */}
            <View className="mb-4">
              <Text className="text-sm font-gsemibold text-gray-700 mb-2">Name *</Text>
              <TextInput
                className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-gregular text-gray-800"
                placeholder="Enter your full name"
                placeholderTextColor="#9ca3af"
                value={formData.name}
                onChangeText={(text) => setFormData({...formData, name: text})}
              />
            </View>

            {/* Email */}
            <View className="mb-4">
              <Text className="text-sm font-gsemibold text-gray-700 mb-2">Email *</Text>
              <TextInput
                className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-gregular text-gray-800"
                placeholder="Enter your email address"
                placeholderTextColor="#9ca3af"
                keyboardType="email-address"
                autoCapitalize="none"
                value={formData.email}
                onChangeText={(text) => setFormData({...formData, email: text})}
              />
            </View>

            {/* Phone */}
            <View className="mb-4">
              <Text className="text-sm font-gsemibold text-gray-700 mb-2">Phone Number</Text>
              <TextInput
                className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-gregular text-gray-800"
                placeholder="Enter your phone number"
                placeholderTextColor="#9ca3af"
                keyboardType="phone-pad"
                value={formData.phone}
                onChangeText={(text) => setFormData({...formData, phone: text})}
              />
            </View>

            {/* Subject */}
            <View className="mb-4">
              <Text className="text-sm font-gsemibold text-gray-700 mb-2">Subject</Text>
              <TextInput
                className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-gregular text-gray-800"
                placeholder="What is this regarding?"
                placeholderTextColor="#9ca3af"
                value={formData.subject}
                onChangeText={(text) => setFormData({...formData, subject: text})}
              />
            </View>

            {/* Message */}
            <View className="mb-5">
              <Text className="text-sm font-gsemibold text-gray-700 mb-2">Message *</Text>
              <TextInput
                className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-gregular text-gray-800"
                placeholder="Tell us how we can help you..."
                placeholderTextColor="#9ca3af"
                multiline
                numberOfLines={5}
                textAlignVertical="top"
                value={formData.message}
                onChangeText={(text) => setFormData({...formData, message: text})}
              />
            </View>

            {/* Submit Button */}
            <Pressable 
              className="bg-primary rounded-xl py-4 flex-row items-center justify-center shadow-md shadow-primary/30"
              onPress={handleSubmit}
            >
              <MaterialIcons name="send" size={20} color="#fff" />
              <Text className="text-white font-gbold ml-2 text-base">Send Message</Text>
            </Pressable>
          </View>

          {/* Social Media */}
          <View className="bg-white rounded-2xl p-6 shadow-sm shadow-black/5">
            <Text className="text-lg font-gbold text-gray-800 mb-4">Connect on Social Media</Text>
            <View className="flex-row justify-around">
              {[
                { name: 'Facebook', icon: 'facebook', color: '#1877f2' },
                { name: 'Instagram', icon: 'instagram', color: '#e4405f' },
                { name: 'Twitter', icon: 'twitter', color: '#1da1f2' },
                { name: 'LinkedIn', icon: 'linkedin', color: '#0a66c2' },
              ].map((social, index) => (
                <Pressable
                  key={index}
                  className="items-center"
                  onPress={() => Alert.alert(social.name, `Opening ${social.name}...`)}
                >
                  <View 
                    className="rounded-full w-14 h-14 items-center justify-center mb-2"
                    style={{ backgroundColor: `${social.color}15` }}
                  >
                    <Ionicons name={social.icon} size={24} color={social.color} />
                  </View>
                  <Text className="text-xs font-gmedium text-gray-600">{social.name}</Text>
                </Pressable>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
