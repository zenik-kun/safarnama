import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, ScrollView, Text, View } from 'react-native';

export default function MoreScreen() {
  const menuItems = [
    { 
      title: 'Community Hidden Gems', 
      subtitle: 'Discover & share secret travel spots',
      icon: 'explore',
      iconType: 'material',
      route: '/community',
  color: '#7c3aed',
      highlight: true
    },
    { 
      title: 'About Us', 
      subtitle: 'Learn more about SAFARNAMA',
      icon: 'info',
      iconType: 'material',
      route: '/about',
      color: '#3b82f6'
    },
    { 
      title: 'Contact Us', 
      subtitle: 'Get in touch with our team',
      icon: 'mail',
      iconType: 'material',
      route: '/contact',
      color: '#10b981'
    },
    { 
      title: 'My Bookings', 
      subtitle: 'View your travel history',
      icon: 'receipt-long',
      iconType: 'material',
      action: 'bookings',
      color: '#f59e0b'
    },
    { 
      title: 'Saved Places', 
      subtitle: 'Your favorite destinations',
      icon: 'bookmark',
      iconType: 'ionicon',
      action: 'saved',
      color: '#ec4899'
    },
    { 
      title: 'Help & Support', 
      subtitle: 'FAQs and customer support',
      icon: 'help-circle',
      iconType: 'ionicon',
      action: 'support',
      color: '#6366f1'
    },
    { 
      title: 'Settings', 
      subtitle: 'Preferences and notifications',
      icon: 'settings',
      iconType: 'material',
      action: 'settings',
      color: '#64748b'
    },
  ];

  const socialMedia = [
    { name: 'Facebook', icon: 'facebook-f', color: '#1877f2', bgColor: '#1877f2' },
    { name: 'Instagram', icon: 'instagram', color: '#e4405f', bgColor: '#e4405f' },
    { name: 'Twitter', icon: 'twitter', color: '#1da1f2', bgColor: '#1da1f2' },
    { name: 'YouTube', icon: 'youtube', color: '#ff0000', bgColor: '#ff0000' },
  ];

  const handlePress = (item) => {
    if (item.route) {
      router.push(item.route);
    } else if (item.action === 'bookings') {
      alert('My Bookings\n\nYour booking history will appear here. Currently you have no bookings.');
    } else if (item.action === 'saved') {
      alert('Saved Places\n\nYour saved destinations will appear here. Start exploring and save your favorites!');
    } else if (item.action === 'support') {
      alert('Help & Support\n\nFor assistance, please contact us at:\nsupport@safarnama.com\n+91 XXXXX XXXXX');
    } else if (item.action === 'settings') {
      alert('Settings\n\nManage your preferences, notifications, and account settings here. (Coming soon)');
    }
  };

  return (
    <View className="flex-1 bg-gray-50">
      <StatusBar style="light" />
      
      {/* Header */}
      <View className="bg-primary pt-12 pb-6 px-6">
        <Text className="text-white text-3xl font-gbold mb-2">More</Text>
        <Text className="text-white/90 font-gmedium text-sm">Settings, info & support</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        <View className="px-6 pt-6">
          {/* Profile Card */}
          <View className="bg-white rounded-2xl p-5 mb-6 shadow-sm shadow-black/5">
            <View className="flex-row items-center">
              <View className="bg-primary/10 rounded-full w-16 h-16 items-center justify-center mr-4">
                <MaterialIcons name="person" size={32} color="#7c3aed" />
              </View>
              <View className="flex-1">
                <Text className="text-lg font-gbold text-gray-800">Welcome, Traveler!</Text>
                <Text className="text-sm font-gregular text-gray-600 mt-1">Explore the world with SAFARNAMA</Text>
              </View>
              <Pressable className="bg-primary/10 rounded-full p-2">
                <MaterialIcons name="edit" size={20} color="#7c3aed" />
              </Pressable>
            </View>
          </View>

          {/* Menu Items */}
          <View className="mb-6">
            {menuItems.map((item, index) => (
              <Pressable
                key={index}
                onPress={() => handlePress(item)}
                className={`bg-white rounded-2xl p-4 mb-3 shadow-sm shadow-black/5 active:opacity-80 ${
                  item.highlight ? 'border-2' : ''
                }`}
              >
                <View className="flex-row items-center">
                    <View 
                    className="rounded-full w-12 h-12 items-center justify-center mr-4"
                    style={{ backgroundColor: `${item.color}22` }}
                  >
                    {item.iconType === 'material' ? (
                      <MaterialIcons name={item.icon} size={24} color={item.color} />
                    ) : (
                      <Ionicons name={item.icon} size={24} color={item.color} />
                    )}
                  </View>
                  <View className="flex-1">
                    <View className="flex-row items-center">
                      <Text className="text-base font-gbold text-gray-800">{item.title}</Text>
                      {item.highlight && (
                        <View className="ml-2 bg-primary/10 px-2 py-0.5 rounded-full">
                          <Text className="text-xs font-gbold text-primary">NEW</Text>
                        </View>
                      )}
                    </View>
                    <Text className="text-xs font-gregular text-gray-600 mt-0.5">{item.subtitle}</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
                </View>
              </Pressable>
            ))}
          </View>

          {/* Social Media */}
          <View className="bg-white rounded-2xl p-5 mb-6 shadow-sm shadow-black/5">
            <Text className="text-lg font-gbold text-gray-800 mb-4">Connect With Us</Text>
            <View className="flex-row justify-around">
              {socialMedia.map((social, index) => (
                <Pressable
                  key={index}
                  className="items-center"
                  onPress={() => alert(`Opening ${social.name}...`)}
                >
                  <View 
                    className="rounded-full w-14 h-14 items-center justify-center mb-2"
                    style={{ backgroundColor: social.bgColor }}
                  >
                    <FontAwesome5 name={social.icon} size={22} color="#fff" />
                  </View>
                  <Text className="text-xs font-gmedium text-gray-600">{social.name}</Text>
                </Pressable>
              ))}
            </View>
          </View>

          {/* App Info */}
          <View className="bg-white rounded-2xl p-5 mb-6 shadow-sm shadow-black/5">
            <View className="items-center">
              <View className="bg-primary rounded-full w-20 h-20 items-center justify-center mb-3">
                <MaterialIcons name="flight-takeoff" size={40} color="#fff" />
              </View>
              <Text className="text-xl font-gbold text-gray-800 mb-1">SAFARNAMA</Text>
              <Text className="text-sm font-gregular text-gray-600 mb-3">Version 1.0.0</Text>
              <View className="bg-primary/10 px-4 py-2 rounded-full">
                <Text className="text-primary text-xs font-gsemibold">Your Personal Travel App</Text>
              </View>
            </View>
          </View>

          {/* Stats */}
          <View className="flex-row mb-6">
            <View className="flex-1 bg-primary rounded-2xl p-4 mr-2 shadow-sm shadow-black/10">
              <View className="items-center">
                <MaterialIcons name="flight-takeoff" size={28} color="#fff" />
                <Text className="text-2xl font-gbold text-white mt-2">50K+</Text>
                <Text className="text-xs font-gmedium text-white/90">Happy Travelers</Text>
              </View>
            </View>
            <View className="flex-1 bg-primary rounded-2xl p-4 ml-2 shadow-sm shadow-black/10">
              <View className="items-center">
                <MaterialIcons name="location-on" size={28} color="#fff" />
                <Text className="text-2xl font-gbold text-white mt-2">200+</Text>
                <Text className="text-xs font-gmedium text-white/90">Destinations</Text>
              </View>
            </View>
          </View>

          {/* Footer */}
          <View className="pt-4 pb-2 border-t border-gray-200">
            <Text className="text-center text-xs text-gray-500 font-gregular mb-1">
              Developed by: DISHA MENDIRATTA
            </Text>
            <Text className="text-center text-xs text-gray-500 font-gregular">
              Copyright © 2025 SAFARNAMA All Rights Reserved.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
