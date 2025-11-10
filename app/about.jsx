import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AboutScreen() {
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
        <Text className="text-xl font-gbold text-gray-800">About Us</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
        <View className="px-6 py-6">
          {/* Logo Section */}
          <View className="bg-primary rounded-3xl p-8 mb-6 items-center shadow-lg shadow-primary/20">
            <View className="bg-white rounded-full w-24 h-24 items-center justify-center mb-4">
              <MaterialIcons name="flight-takeoff" size={48} color="#7c3aed" />
            </View>
            <Text className="text-white text-3xl font-gbold mb-2">SAFARNAMA</Text>
            <Text className="text-white/90 text-sm font-gmedium text-center">Your Personal Travel Companion</Text>
          </View>

          {/* About Content */}
          <View className="bg-white rounded-2xl p-6 mb-6 shadow-sm shadow-black/5">
            <Text className="text-lg font-gbold text-gray-800 mb-3">Our Story</Text>
            <Text className="text-sm font-gregular text-gray-700 leading-6 mb-4">
              SAFARNAMA is your trusted companion for discovering and experiencing the world's most beautiful destinations. We believe that every journey tells a story, and we're here to help you write yours.
            </Text>
            <Text className="text-sm font-gregular text-gray-700 leading-6">
              Founded with a passion for travel and exploration, we offer personalized recommendations, budget-friendly packages, and a community-driven platform where travelers share their hidden gems and authentic experiences.
            </Text>
          </View>

          {/* Mission & Vision */}
          <View className="bg-white rounded-2xl p-6 mb-6 shadow-sm shadow-black/5">
            <View className="mb-5">
              <View className="flex-row items-center mb-3">
                <View className="bg-primary/10 rounded-full w-10 h-10 items-center justify-center mr-3">
                  <MaterialIcons name="flag" size={24} color="#7c3aed" />
                </View>
                <Text className="text-lg font-gbold text-gray-800">Our Mission</Text>
              </View>
              <Text className="text-sm font-gregular text-gray-700 leading-6">
                To make travel accessible, affordable, and memorable for everyone by providing personalized recommendations and authentic local experiences.
              </Text>
            </View>

            <View>
              <View className="flex-row items-center mb-3">
                <View className="bg-primary/10 rounded-full w-10 h-10 items-center justify-center mr-3">
                  <MaterialIcons name="visibility" size={24} color="#7c3aed" />
                </View>
                <Text className="text-lg font-gbold text-gray-800">Our Vision</Text>
              </View>
              <Text className="text-sm font-gregular text-gray-700 leading-6">
                To become the world's most trusted travel platform, connecting millions of travelers with unforgettable destinations and experiences.
              </Text>
            </View>
          </View>

          {/* Features */}
          <View className="bg-white rounded-2xl p-6 mb-6 shadow-sm shadow-black/5">
            <Text className="text-lg font-gbold text-gray-800 mb-4">What We Offer</Text>
            
            {[
              { icon: 'lightbulb', title: 'Smart Recommendations', desc: 'AI-powered suggestions based on your preferences' },
              { icon: 'group', title: 'Community Driven', desc: 'Share and discover hidden spots from fellow travelers' },
              { icon: 'attach-money', title: 'Budget Friendly', desc: 'Packages for every budget, from backpackers to luxury seekers' },
              { icon: 'verified', title: 'Trusted Service', desc: 'Verified packages with 24/7 customer support' },
            ].map((feature, index) => (
              <View key={index} className="flex-row items-start mb-4 last:mb-0">
                <View className="bg-primary/10 rounded-full w-10 h-10 items-center justify-center mr-3 mt-0.5">
                  <MaterialIcons name={feature.icon} size={22} color="#7c3aed" />
                </View>
                <View className="flex-1">
                  <Text className="text-base font-gbold text-gray-800 mb-1">{feature.title}</Text>
                  <Text className="text-sm font-gregular text-gray-600 leading-5">{feature.desc}</Text>
                </View>
              </View>
            ))}
          </View>

          {/* Stats */}
          <View className="flex-row flex-wrap -mx-2 mb-6">
            {[
              { count: '50K+', label: 'Happy Travelers', icon: 'people' },
              { count: '200+', label: 'Destinations', icon: 'location-on' },
              { count: '500+', label: 'Packages', icon: 'card-travel' },
              { count: '24/7', label: 'Support', icon: 'support-agent' },
            ].map((stat, index) => (
              <View key={index} className="w-1/2 px-2 mb-4">
                <View className="bg-primary/5 border border-primary/20 rounded-2xl p-4 items-center">
                  <MaterialIcons name={stat.icon} size={28} color="#7c3aed" />
                  <Text className="text-2xl font-gbold text-gray-800 mt-2">{stat.count}</Text>
                  <Text className="text-xs font-gmedium text-gray-600 mt-1">{stat.label}</Text>
                </View>
              </View>
            ))}
          </View>

          {/* Contact CTA */}
          <View className="bg-gradient-to-br from-primary to-orange-600 rounded-2xl p-6 shadow-lg">
            <View className="flex-row items-center mb-3">
              <View className="bg-white/20 rounded-full p-2 mr-3">
                <MaterialIcons name="mail" size={24} color="#fff" />
              </View>
              <Text className="text-white text-xl font-gbold">Get in Touch</Text>
            </View>
            <Text className="text-white/95 text-sm font-gmedium mb-4 leading-5">
              Have questions or suggestions? We'd love to hear from you!
            </Text>
            <Pressable 
              className="bg-white rounded-xl py-3 flex-row items-center justify-center"
              onPress={() => router.push('/contact')}
            >
              <MaterialIcons name="chat" size={20} color="#7c3aed" />
              <Text className="text-primary font-gbold ml-2">Contact Us</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
