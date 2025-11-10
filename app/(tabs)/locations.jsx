import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';

const destinations = [
  {
    id: 'kashmir',
    name: 'Kashmir',
    country: 'India',
    rating: 5,
    img: 'https://images.unsplash.com/photo-1586688285249-0a14f76f663e?auto=format&fit=crop&w=800&q=60',
    description: 'Heaven on Earth Kashmir is one of the most beautiful travel destinations to visit in North India. Nowhere in India you will behold the scenic landscapes, icy glaciers, pristine lakes and lofty mountains as beautiful as Kashmir.',
    highlights: ['Dal Lake', 'Gulmarg', 'Pahalgam', 'Sonamarg', 'Mughal Gardens']
  },
  {
    id: 'istanbul',
    name: 'Istanbul',
    country: 'Turkey',
    rating: 4.5,
    img: 'https://images.unsplash.com/photo-1583241804143-5c27394a0403?auto=format&fit=crop&w=800&q=60',
    description: 'Istanbul offers unique historical and cultural riches together. This captivating metropolis straddles both Europe and Asia, offering a wealth of charm with its geography spread over two continents.',
    highlights: ['Hagia Sophia', 'Blue Mosque', 'Grand Bazaar', 'Bosphorus', 'Topkapi Palace']
  },
  {
    id: 'paris',
    name: 'Paris',
    country: 'France',
    rating: 5,
    img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=60',
    description: 'The City of Light, Paris is renowned for its art, fashion, gastronomy, and culture. From iconic landmarks to charming streets, Paris offers romance and beauty at every corner.',
    highlights: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame', 'Arc de Triomphe', 'Champs-Élysées']
  },
  {
    id: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    rating: 4.5,
    img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=60',
    description: 'An Indonesian island paradise known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs. Bali is a spiritual sanctuary with vibrant culture.',
    highlights: ['Ubud Rice Terraces', 'Tanah Lot Temple', 'Seminyak Beach', 'Mount Batur', 'Uluwatu Temple']
  },
  {
    id: 'dubai',
    name: 'Dubai',
    country: 'UAE',
    rating: 4.5,
    img: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=800&q=60',
    description: 'A futuristic city in the desert, Dubai is known for its ultramodern architecture, luxury shopping, and vibrant nightlife. Experience the perfect blend of tradition and innovation.',
    highlights: ['Burj Khalifa', 'Dubai Mall', 'Palm Jumeirah', 'Desert Safari', 'Dubai Marina']
  },
  {
    id: 'geneva',
    name: 'Geneva',
    country: 'Switzerland',
    rating: 4.5,
    img: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=800&q=60',
    description: 'A global city on the shores of Lake Geneva, surrounded by the Alps. Known for diplomacy, watchmaking, and stunning natural beauty with a cosmopolitan atmosphere.',
    highlights: ['Lake Geneva', 'Jet d\'Eau', 'Old Town', 'Mont Salève', 'United Nations']
  },
  {
    id: 'port-blair',
    name: 'Port Blair',
    country: 'Andaman & Nicobar Islands',
    rating: 4,
    img: 'https://images.unsplash.com/photo-1616137728400-21f8c49b156c?auto=format&fit=crop&w=800&q=60',
    description: 'The capital of Andaman & Nicobar Islands, Port Blair offers pristine beaches, crystal-clear waters, and rich marine life. A tropical paradise for nature lovers.',
    highlights: ['Cellular Jail', 'Radhanagar Beach', 'Ross Island', 'Havelock Island', 'Coral Reefs']
  }
];

export default function LocationsScreen() {
  const [selectedDest, setSelectedDest] = useState(null);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Ionicons key={`full-${i}`} name="star" size={14} color="#FFD700" />);
    }
    if (hasHalf) {
      stars.push(<Ionicons key="half" name="star-half" size={14} color="#FFD700" />);
    }
    while (stars.length < 5) {
      stars.push(<Ionicons key={`empty-${stars.length}`} name="star-outline" size={14} color="#FFD700" />);
    }
    return stars;
  };

  return (
    <View className="flex-1 bg-gray-50">
      <StatusBar style="light" />
      {/* Header */}
      <View className="bg-primary pt-12 pb-6 px-6">
        <Text className="text-white text-3xl font-gbold mb-2">Locations</Text>
        <Text className="text-white/90 font-gmedium text-sm">Explore The Unexplored!</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        <View className="px-6 pt-6">
          {destinations.map((dest, idx) => (
            <Pressable
              key={dest.id}
              onPress={() => setSelectedDest(selectedDest === dest.id ? null : dest.id)}
              className="bg-white rounded-2xl mb-4 shadow shadow-black/10 overflow-hidden"
            >
              <Image source={{ uri: dest.img }} className="w-full h-48" />
              <View className="p-5">
                <View className="flex-row items-center justify-between mb-2">
                  <View>
                    <Text className="text-xl font-gbold text-gray-800">{dest.name}</Text>
                    <Text className="text-xs font-gmedium text-gray-500">{dest.country}</Text>
                  </View>
                  <View className="flex-row">
                    {renderStars(dest.rating)}
                  </View>
                </View>

                <Text className="text-sm font-gregular text-gray-700 leading-5 mb-3">
                  {dest.description}
                </Text>

                {selectedDest === dest.id && (
                  <View className="mt-2 pt-3 border-t border-gray-200">
                    <Text className="text-xs font-gbold text-gray-700 mb-2">Top Attractions:</Text>
                    <View className="flex-row flex-wrap">
                      {dest.highlights.map((highlight, i) => (
                        <View key={i} className="mr-2 mb-2 px-3 py-1 bg-primary/10 rounded-full">
                          <Text className="text-xs font-gsemibold text-primary">{highlight}</Text>
                        </View>
                      ))}
                    </View>
                    <Pressable
                      onPress={() => router.push('/booking')}
                      className="mt-4 bg-primary rounded-lg py-3 flex-row items-center justify-center"
                    >
                      <MaterialIcons name="flight-takeoff" size={18} color="#fff" />
                      <Text className="text-white font-gbold ml-2">Book Now</Text>
                    </Pressable>
                  </View>
                )}

                <View className="flex-row items-center justify-center mt-2">
                  <Text className="text-xs font-gmedium text-primary mr-1">
                    {selectedDest === dest.id ? 'Show Less' : 'Read More'}
                  </Text>
                  <Ionicons
                    name={selectedDest === dest.id ? 'chevron-up' : 'chevron-down'}
                    size={16}
                    color="#7c3aed"
                  />
                </View>
              </View>
            </Pressable>
          ))}

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
