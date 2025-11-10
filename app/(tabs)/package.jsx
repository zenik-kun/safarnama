import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';

const flashDeals = [
  { title: 'Maldives Escape', price: '₹45,000', discount: '30% OFF', img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=60', days: '5D/4N' },
  { title: 'Thailand Adventure', price: '₹32,000', discount: '25% OFF', img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=60', days: '6D/5N' },
  { title: 'Bali Paradise', price: '₹38,000', discount: '35% OFF', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=60', days: '5D/4N' },
  { title: 'Dubai Luxury', price: '₹55,000', discount: '20% OFF', img: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=800&q=60', days: '4D/3N' },
  { title: 'Goa Getaway', price: '₹18,000', discount: '40% OFF', img: 'https://images.unsplash.com/photo-1533900291411-35f7b27b2214?auto=format&fit=crop&w=800&q=60', days: '4D/3N' }
];

const unexplored = [
  { title: 'Ladakh', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=60', price: '₹28,000' },
  { title: 'Meghalaya', img: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=60', price: '₹22,000' },
  { title: 'Spiti Valley', img: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=60', price: '₹25,000' }
];

const international = [
  { title: 'Paris', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=60', price: '₹85,000' },
  { title: 'Switzerland', img: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=800&q=60', price: '₹95,000' },
  { title: 'Greece', img: 'https://images.unsplash.com/photo-1503152394-c571994fd383?auto=format&fit=crop&w=800&q=60', price: '₹78,000' }
];

const faqs = [
  { q: 'What kind of destinations can I choose for travelling?', a: 'You can choose any destination for travel as per your mood. For an action-packed holiday, choose wildlife, trekking and adventurous destinations. For romance, pick couple-friendly spots. Choose based on hills, beaches, heritage or pilgrimage sites.' },
  { q: 'Can I opt for a budget-friendly holiday?', a: 'Yes! Set an approximate budget before exploring. Search for destinations in any range from ₹10,000 to ₹50,000. Book in advance to avoid price changes.' },
  { q: 'Which time of the year is best suited for booking?', a: 'Holidays can be booked year-round. Select the month you\'re planning to travel and our filters will show ideal destinations for that time.' },
  { q: 'What all will I get in a holiday package?', a: 'Complete details of unique attractions, best places to stay by budget, hotels, resorts, guest houses and memorable experiences to indulge in.' }
];

export default function PackageScreen() {
  const [expandedFaq, setExpandedFaq] = useState(null);

  return (
    <View className="flex-1 bg-gray-50">
      <StatusBar style="light" />
      {/* Header */}
      <View className="bg-primary pt-12 pb-6 px-6">
        <Text className="text-white text-3xl font-gbold mb-2">Packages</Text>
        <Text className="text-white/90 font-gmedium text-sm">Top Stays & Weekend Getaways</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        <View className="px-6 pt-6">
          {/* Intro */}
          <View className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-5 mb-6">
            <Text className="text-base font-gbold text-gray-800 mb-2">Need a break from the daily drill?</Text>
            <Text className="text-sm font-gregular text-gray-600">
              It's time to switch off and escape to these beautiful properties. Here's a list especially curated for you. Just pick your favourite!
            </Text>
          </View>

          {/* Flash Deals */}
          <View className="mb-6">
            <View className="flex-row items-center justify-between mb-4">
              <View>
                <Text className="text-xl font-gbold text-gray-800">Flash Deals Live</Text>
                <Text className="text-xs font-gmedium text-gray-500">Get extra discount • Code: FLASHDEAL</Text>
              </View>
              <View className="bg-red-500 rounded-full px-3 py-1">
                <Text className="text-white text-xs font-gbold">LIMITED</Text>
              </View>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="-mx-6 px-6">
              {flashDeals.map((deal, idx) => (
                <Pressable
                  key={idx}
                  onPress={() => router.push('/booking')}
                  className="bg-white rounded-2xl mr-4 shadow shadow-black/10 overflow-hidden"
                  style={{ width: 260 }}
                >
                  <Image source={{ uri: deal.img }} className="w-full h-40" />
                  <View className="absolute top-3 right-3 bg-red-500 rounded-full px-3 py-1">
                    <Text className="text-white text-xs font-gbold">{deal.discount}</Text>
                  </View>
                  <View className="p-4">
                    <Text className="text-base font-gbold text-gray-800 mb-1">{deal.title}</Text>
                    <View className="flex-row items-center justify-between">
                      <View className="flex-row items-center">
                        <MaterialIcons name="access-time" size={14} color="#666" />
                        <Text className="text-xs font-gmedium text-gray-600 ml-1">{deal.days}</Text>
                      </View>
                      <Text className="text-lg font-gbold text-primary">{deal.price}</Text>
                    </View>
                  </View>
                </Pressable>
              ))}
            </ScrollView>
          </View>

          {/* Explore Unexplored */}
          <View className="mb-6">
            <Text className="text-xl font-gbold text-gray-800 mb-4">Explore the Unexplored</Text>
            <View className="flex-row flex-wrap -mx-2">
              {unexplored.map((item, idx) => (
                <Pressable
                  key={idx}
                  onPress={() => router.push('/booking')}
                  className="w-1/2 px-2 mb-4"
                >
                  <View className="bg-white rounded-2xl shadow shadow-black/10 overflow-hidden">
                    <Image source={{ uri: item.img }} className="w-full h-32" />
                    <View className="p-3">
                      <Text className="text-sm font-gbold text-gray-800">{item.title}</Text>
                      <Text className="text-xs font-gmedium text-primary mt-1">From {item.price}</Text>
                    </View>
                  </View>
                </Pressable>
              ))}
            </View>
          </View>

          {/* International Destinations */}
          <View className="mb-6">
            <View className="flex-row items-center mb-4">
              <FontAwesome5 name="globe-americas" size={20} color="#7c3aed" />
              <Text className="text-xl font-gbold text-gray-800 ml-2">International Destinations</Text>
            </View>
            <Text className="text-sm font-gregular text-gray-600 mb-4">Grab best deals on international destinations!</Text>
            
            {international.map((item, idx) => (
              <Pressable
                key={idx}
                onPress={() => router.push('/booking')}
                className="bg-white rounded-2xl mb-3 shadow shadow-black/10 overflow-hidden flex-row"
              >
                <Image source={{ uri: item.img }} className="w-28 h-28" />
                <View className="flex-1 p-4 justify-between">
                  <View>
                    <Text className="text-base font-gbold text-gray-800">{item.title}</Text>
                    <View className="flex-row items-center mt-1">
                      <MaterialIcons name="flight-takeoff" size={14} color="#666" />
                      <Text className="text-xs font-gmedium text-gray-600 ml-1">International</Text>
                    </View>
                  </View>
                  <Text className="text-lg font-gbold text-primary">{item.price}</Text>
                </View>
                <View className="justify-center pr-4">
                  <Ionicons name="chevron-forward" size={20} color="#ccc" />
                </View>
              </Pressable>
            ))}
          </View>

          {/* FAQs */}
          <View className="bg-white rounded-2xl p-5 mb-4 shadow shadow-black/5">
            <Text className="text-lg font-gbold text-gray-800 mb-4">FAQs - Frequently Asked Questions</Text>
            {faqs.map((faq, idx) => (
              <View key={idx} className="mb-3">
                <Pressable
                  onPress={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="flex-row justify-between items-start bg-gray-50 rounded-lg px-4 py-3"
                >
                  <Text className="flex-1 text-sm font-gbold text-gray-800 mr-2">{faq.q}</Text>
                  <Ionicons
                    name={expandedFaq === idx ? 'chevron-up' : 'chevron-down'}
                    size={18}
                    color="#7c3aed"
                  />
                </Pressable>
                {expandedFaq === idx && (
                  <View className="px-4 py-3">
                    <Text className="text-xs font-gregular text-gray-700 leading-5">{faq.a}</Text>
                  </View>
                )}
              </View>
            ))}
          </View>

          {/* Footer */}
          <View className="mt-4 pt-6 border-t border-gray-200">
            <Text className="text-center text-xs text-gray-500 font-gregular">
              Copyright © 2025 SAFARNAMA All Rights Reserved.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
