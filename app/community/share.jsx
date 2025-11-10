import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Pressable, ScrollView, Text, TextInput, View } from 'react-native';

export default function ShareSpotScreen() {
  const [formData, setFormData] = useState({
    spotName: '',
    location: '',
    type: 'hilly',
    description: '',
    tips: '',
    bestTime: '',
    localContact: '',
    tags: ''
  });

  const spotTypes = [
    { id: 'hilly', name: 'Hilly', icon: 'terrain', color: '#10b981' },
    { id: 'beach', name: 'Beach', icon: 'beach-access', color: '#3b82f6' },
    { id: 'cultural', name: 'Cultural', icon: 'account-balance', color: '#f59e0b' },
    { id: 'adventure', name: 'Adventure', icon: 'hiking', color: '#ef4444' },
    { id: 'food', name: 'Food Spot', icon: 'restaurant', color: '#ec4899' },
    { id: 'nature', name: 'Nature', icon: 'nature', color: '#22c55e' }
  ];

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (!formData.spotName || !formData.location || !formData.description) {
      Alert.alert('Required Fields', 'Please fill in spot name, location, and description.');
      return;
    }
    Alert.alert(
      'Success!',
      'Thank you for sharing your hidden gem! Your post will be reviewed and published soon.',
      [
        { 
          text: 'View Community', 
          onPress: () => router.push('/community')
        },
        {
          text: 'Share Another',
          onPress: () => {
            setFormData({
              spotName: '',
              location: '',
              type: 'hilly',
              description: '',
              tips: '',
              bestTime: '',
              localContact: '',
              tags: ''
            });
          }
        }
      ]
    );
  };

  return (
    <View className="flex-1 bg-gray-50">
      <StatusBar style="light" />
      
      {/* Header */}
  <View className="pt-12 pb-5 px-6" style={{ paddingTop: 48, backgroundColor: '#7c3aed' }}>
        <View className="flex-row items-center mb-3">
          <Pressable onPress={() => router.back()} className="mr-4 bg-white/20 rounded-full p-2">
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </Pressable>
          <View className="flex-1">
            <Text className="text-white text-3xl font-gbold">Share a Hidden Gem</Text>
            <Text className="text-white/90 font-gmedium text-sm mt-1">Help travelers discover new places</Text>
          </View>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
        <View className="px-6 pt-6">
          {/* Info Banner */}
          <View className="rounded-2xl p-4 mb-6" style={{ backgroundColor: '#f5f3ff', borderColor: '#ddd6fe', borderWidth: 1 }}>
            <View className="flex-row items-center mb-2">
              <MaterialIcons name="stars" size={24} color="#7c3aed" />
              <Text className="ml-2 text-base font-gbold" style={{ color: '#6d28d9' }}>Share Your Discovery</Text>
            </View>
            <Text className="text-sm font-gregular" style={{ color: '#6d28d9' }}>
              Your experiences help create a community of informed travelers. Share photos, tips, and local insights!
            </Text>
          </View>

          {/* Basic Information */}
          <View className="bg-white rounded-2xl p-5 mb-4 shadow-sm shadow-black/5">
            <View className="flex-row items-center mb-4">
              <MaterialIcons name="place" size={22} color="#7c3aed" />
              <Text className="ml-2 text-lg font-gbold text-gray-800">Basic Information</Text>
            </View>

            <Text className="text-xs font-gmedium text-gray-700 mb-1">Spot Name *</Text>
            <TextInput
              value={formData.spotName}
              onChangeText={(v) => updateField('spotName', v)}
              placeholder="e.g., Secret Waterfall, Hidden Café"
              className="border border-gray-300 rounded-lg px-4 py-3 mb-4 font-gregular"
              placeholderTextColor="#999"
            />

            <Text className="text-xs font-gmedium text-gray-700 mb-1">Location *</Text>
            <TextInput
              value={formData.location}
              onChangeText={(v) => updateField('location', v)}
              placeholder="City, State or Region"
              className="border border-gray-300 rounded-lg px-4 py-3 mb-4 font-gregular"
              placeholderTextColor="#999"
            />

            <Text className="text-xs font-gmedium text-gray-700 mb-2">Spot Type *</Text>
            <View className="flex-row flex-wrap -mx-1 mb-4">
              {spotTypes.map(type => (
                <Pressable
                  key={type.id}
                  onPress={() => updateField('type', type.id)}
                  className={`mx-1 mb-2 px-3 py-2 rounded-full flex-row items-center ${
                    formData.type === type.id ? 'bg-purple-600' : 'bg-gray-100'
                  }`}
                >
                  <MaterialIcons 
                    name={type.icon} 
                    size={16} 
                    color={formData.type === type.id ? '#fff' : '#7c3aed'} 
                  />
                  <Text className={`ml-1.5 text-sm font-gsemibold ${
                    formData.type === type.id ? 'text-white' : 'text-gray-700'
                  }`}>{type.name}</Text>
                </Pressable>
              ))}
            </View>
          </View>

          {/* Description & Experience */}
          <View className="bg-white rounded-2xl p-5 mb-4 shadow-sm shadow-black/5">
            <View className="flex-row items-center mb-4">
              <MaterialIcons name="description" size={22} color="#7c3aed" />
              <Text className="ml-2 text-lg font-gbold text-gray-800">Your Experience</Text>
            </View>

            <Text className="text-xs font-gmedium text-gray-700 mb-1">Description *</Text>
            <TextInput
              value={formData.description}
              onChangeText={(v) => updateField('description', v)}
              placeholder="Describe what makes this place special. What did you love about it?"
              multiline
              numberOfLines={6}
              textAlignVertical="top"
              className="border border-gray-300 rounded-lg px-4 py-3 mb-4 font-gregular"
              placeholderTextColor="#999"
            />

            <Text className="text-xs font-gmedium text-gray-700 mb-1">Travel Tips</Text>
            <TextInput
              value={formData.tips}
              onChangeText={(v) => updateField('tips', v)}
              placeholder="Share useful tips - how to reach, what to bring, etc."
              multiline
              numberOfLines={4}
              textAlignVertical="top"
              className="border border-gray-300 rounded-lg px-4 py-3 mb-4 font-gregular"
              placeholderTextColor="#999"
            />
          </View>

          {/* Additional Details */}
          <View className="bg-white rounded-2xl p-5 mb-4 shadow-sm shadow-black/5">
            <View className="flex-row items-center mb-4">
              <MaterialIcons name="info" size={22} color="#7c3aed" />
              <Text className="ml-2 text-lg font-gbold text-gray-800">Additional Details</Text>
            </View>

            <Text className="text-xs font-gmedium text-gray-700 mb-1">Best Time to Visit</Text>
            <TextInput
              value={formData.bestTime}
              onChangeText={(v) => updateField('bestTime', v)}
              placeholder="e.g., October-March, Early morning for sunrise"
              className="border border-gray-300 rounded-lg px-4 py-3 mb-4 font-gregular"
              placeholderTextColor="#999"
            />

            <Text className="text-xs font-gmedium text-gray-700 mb-1">Local Contact (Optional)</Text>
            <TextInput
              value={formData.localContact}
              onChangeText={(v) => updateField('localContact', v)}
              placeholder="Helpful local guide name & contact"
              className="border border-gray-300 rounded-lg px-4 py-3 mb-4 font-gregular"
              placeholderTextColor="#999"
            />

            <Text className="text-xs font-gmedium text-gray-700 mb-1">Tags</Text>
            <TextInput
              value={formData.tags}
              onChangeText={(v) => updateField('tags', v)}
              placeholder="Separate with commas: waterfall, trekking, peaceful"
              className="border border-gray-300 rounded-lg px-4 py-3 font-gregular"
              placeholderTextColor="#999"
            />
          </View>

          {/* Photo Upload Placeholder */}
          <View className="bg-white rounded-2xl p-5 mb-4 shadow-sm shadow-black/5">
            <View className="flex-row items-center mb-4">
              <MaterialIcons name="add-a-photo" size={22} color="#7c3aed" />
              <Text className="ml-2 text-lg font-gbold text-gray-800">Add Photos</Text>
            </View>
            
            <Pressable className="border-2 border-dashed border-gray-300 rounded-xl p-8 items-center">
              <MaterialIcons name="cloud-upload" size={48} color="#9ca3af" />
              <Text className="text-gray-600 font-gbold mt-3 mb-1">Upload Photos</Text>
              <Text className="text-gray-500 font-gregular text-xs text-center">
                Share images of this amazing spot{'\n'}(Coming soon)
              </Text>
            </Pressable>
          </View>

          {/* Guidelines */}
          <View className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 mb-6">
            <View className="flex-row items-start">
              <MaterialIcons name="tips-and-updates" size={20} color="#f59e0b" />
              <View className="flex-1 ml-2">
                <Text className="text-sm font-gbold text-yellow-900 mb-2">Community Guidelines</Text>
                <Text className="text-xs font-gregular text-yellow-800 leading-4 mb-1">
                  • Be respectful and honest in your descriptions
                </Text>
                <Text className="text-xs font-gregular text-yellow-800 leading-4 mb-1">
                  • Share accurate location and accessibility info
                </Text>
                <Text className="text-xs font-gregular text-yellow-800 leading-4">
                  • Help preserve nature - encourage responsible travel
                </Text>
              </View>
            </View>
          </View>

          {/* Submit Button */}
          <Pressable
            onPress={handleSubmit}
            android_ripple={{ color: '#ffffff22', borderless: false }}
            className="rounded-2xl py-4 flex-row items-center justify-center mb-6"
            style={{ backgroundColor: '#7c3aed', elevation: 4 }}
          >
            <MaterialIcons name="send" size={24} color="#fff" />
            <Text className="text-white text-lg font-gbold ml-2">Share with Community</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
