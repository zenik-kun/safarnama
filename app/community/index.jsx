import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';

// Sample community posts (in real app, this would come from database)
const communityPosts = [
  {
    id: 1,
    userName: 'Priya Sharma',
    userAvatar: 'https://i.pravatar.cc/150?img=1',
    location: 'Hidden Waterfall, Meghalaya',
    type: 'hilly',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=60',
    description: 'Found this amazing hidden waterfall during my trek in Meghalaya! Perfect spot for nature lovers. The local guide Raj (+91-XXXXX) can help you reach here.',
    likes: 234,
    comments: 45,
    timeAgo: '2 days ago',
    tags: ['waterfall', 'trekking', 'offbeat']
  },
  {
    id: 2,
    userName: 'Rahul Verma',
    userAvatar: 'https://i.pravatar.cc/150?img=12',
    location: 'Secret Beach, Gokarna',
    type: 'beach',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=60',
    description: 'This secluded beach in Gokarna is accessible only by boat or a 45-min hike. Absolutely worth it! No crowds, just pristine nature.',
    likes: 567,
    comments: 89,
    timeAgo: '5 days ago',
    tags: ['beach', 'secluded', 'peaceful']
  },
  {
    id: 3,
    userName: 'Ananya Singh',
    userAvatar: 'https://i.pravatar.cc/150?img=5',
    location: 'Vintage Café, Dharamshala',
    type: 'cultural',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=60',
    description: 'Best café in Dharamshala with amazing mountain views! Try their apple pie and Tibetan momos. The owner is super friendly and shares great local stories.',
    likes: 189,
    comments: 34,
    timeAgo: '1 week ago',
    tags: ['cafe', 'food', 'mountains']
  },
  {
    id: 4,
    userName: 'Vikram Patel',
    userAvatar: 'https://i.pravatar.cc/150?img=8',
    location: 'Ancient Temple Trail, Hampi',
    type: 'cultural',
    image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?auto=format&fit=crop&w=800&q=60',
    description: 'Discovered this lesser-known temple complex in Hampi. Barely any tourists! The sunset view from here is breathtaking. Local priest tells fascinating stories.',
    likes: 423,
    comments: 67,
    timeAgo: '3 days ago',
    tags: ['temple', 'heritage', 'sunset']
  },
  {
    id: 5,
    userName: 'Sneha Gupta',
    userAvatar: 'https://i.pravatar.cc/150?img=9',
    location: 'Mountain Viewpoint, Spiti Valley',
    type: 'hilly',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=60',
    description: '360° view of the Himalayas from this secret viewpoint! Take the left fork after Kaza village. Best time: early morning for sunrise.',
    likes: 892,
    comments: 156,
    timeAgo: '4 days ago',
    tags: ['mountains', 'viewpoint', 'sunrise']
  }
];

export default function CommunityScreen() {
  const [filter, setFilter] = useState('all');
  const [likedPosts, setLikedPosts] = useState(new Set());

  const filters = [
    { id: 'all', name: 'All', icon: 'apps' },
    { id: 'hilly', name: 'Hilly', icon: 'terrain' },
    { id: 'beach', name: 'Beach', icon: 'beach-access' },
    { id: 'cultural', name: 'Cultural', icon: 'account-balance' }
  ];

  const toggleLike = (postId) => {
    const newLiked = new Set(likedPosts);
    if (newLiked.has(postId)) {
      newLiked.delete(postId);
    } else {
      newLiked.add(postId);
    }
    setLikedPosts(newLiked);
  };

  const filteredPosts = filter === 'all' 
    ? communityPosts 
    : communityPosts.filter(post => post.type === filter);

  return (
    <View className="flex-1 bg-gray-50">
      <StatusBar style="light" />
      
      {/* Header */}
  <View className="bg-primary pt-12 pb-5 px-6" style={{ paddingTop: 48 }}>
        <View className="flex-row items-center justify-between mb-4">
          <Pressable onPress={() => router.back()} className="mr-4 bg-white/20 rounded-full p-2">
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </Pressable>
          <View className="flex-1">
            <Text className="text-white text-3xl font-gbold">Hidden Gems</Text>
            <Text className="text-white/90 font-gmedium text-sm mt-1">Community shared experiences</Text>
          </View>
          <Pressable 
            onPress={() => router.push('/community/share')}
    className="bg-white/20 rounded-full p-2.5 active:opacity-80"
          >
            <MaterialIcons name="add" size={28} color="#fff" />
          </Pressable>
        </View>

        {/* Filters */}
  <ScrollView horizontal showsHorizontalScrollIndicator={false} className="-mx-6 px-6">
          {filters.map(f => (
            <Pressable
              key={f.id}
              onPress={() => setFilter(f.id)}
              className={`mr-3 px-4 py-2 rounded-full flex-row items-center ${
                filter === f.id ? 'bg-white' : 'bg-white/20'
              }`}
            >
              <MaterialIcons 
                name={f.icon} 
                size={18} 
                color={filter === f.id ? '#7c3aed' : '#fff'} 
              />
              <Text className={`ml-1.5 font-gsemibold text-sm ${
                filter === f.id ? 'text-primary' : 'text-white'
              }`}>{f.name}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
        <View className="px-6 pt-6">
          {/* Info Card */}
          <View className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-6 flex-row items-start">
            <MaterialIcons name="info" size={22} color="#2563eb" />
            <View className="flex-1 ml-3">
              <Text className="text-sm font-gbold text-blue-900 mb-1">Share Your Discoveries!</Text>
              <Text className="text-xs font-gregular text-blue-700 leading-5">
                Help fellow travelers discover amazing hidden spots. Share your experiences, tips, and photos!
              </Text>
            </View>
          </View>

          {/* Community Posts */}
          {filteredPosts.map(post => (
            <View key={post.id} className="bg-white rounded-2xl mb-4 shadow-sm shadow-black/5 overflow-hidden">
              {/* Post Header */}
              <View className="p-4 flex-row items-center">
                <Image source={{ uri: post.userAvatar }} className="w-12 h-12 rounded-full" />
                <View className="flex-1 ml-3">
                  <Text className="text-sm font-gbold text-gray-800">{post.userName}</Text>
                  <View className="flex-row items-center mt-0.5">
                    <MaterialIcons name="location-on" size={14} color="#9ca3af" />
                    <Text className="text-xs font-gregular text-gray-600 ml-0.5">{post.location}</Text>
                  </View>
                </View>
                <Text className="text-xs font-gregular text-gray-500">{post.timeAgo}</Text>
              </View>

              {/* Post Image */}
              <Image source={{ uri: post.image }} className="w-full h-64" />

              {/* Post Actions */}
              <View className="p-4">
                <View className="flex-row items-center mb-3">
                  <Pressable 
                    onPress={() => toggleLike(post.id)}
                    className="flex-row items-center mr-5 active:opacity-80"
                  >
                    <Ionicons 
                      name={likedPosts.has(post.id) ? 'heart' : 'heart-outline'} 
                      size={24} 
                      color={likedPosts.has(post.id) ? '#ef4444' : '#6b7280'} 
                    />
                    <Text className="ml-1.5 text-sm font-gsemibold text-gray-700">
                      {post.likes + (likedPosts.has(post.id) ? 1 : 0)}
                    </Text>
                  </Pressable>
                  <Pressable className="flex-row items-center active:opacity-80">
                    <Ionicons name="chatbubble-outline" size={22} color="#6b7280" />
                    <Text className="ml-1.5 text-sm font-gsemibold text-gray-700">{post.comments}</Text>
                  </Pressable>
                  <View className="flex-1" />
                  <Pressable className="active:opacity-80">
                    <Ionicons name="bookmark-outline" size={24} color="#6b7280" />
                  </Pressable>
                </View>

                {/* Post Description */}
                <Text className="text-sm font-gregular text-gray-800 leading-5 mb-3">
                  {post.description}
                </Text>

                {/* Tags */}
                <View className="flex-row flex-wrap">
                  {post.tags.map((tag, idx) => (
                    <View key={idx} className="px-3 py-1 rounded-full mr-2 mb-2" style={{ backgroundColor: '#ede9fe' }}>
                      <Text className="text-xs font-gsemibold text-primary">#{tag}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          ))}

          {filteredPosts.length === 0 && (
            <View className="bg-white rounded-2xl p-8 items-center">
              <MaterialIcons name="explore-off" size={64} color="#d1d5db" />
              <Text className="text-gray-600 font-gbold mt-4 mb-2">No posts found</Text>
              <Text className="text-gray-500 font-gregular text-sm text-center">
                Be the first to share a hidden gem in this category!
              </Text>
            </View>
          )}
        </View>
      </ScrollView>

      {/* Floating Add Button */}
      <Pressable 
        onPress={() => router.push('/community/share')}
        android_ripple={{ color: '#ffffff22', borderless: true }}
        className="absolute right-6 rounded-full w-16 h-16 items-center justify-center shadow-lg"
        style={{ bottom: 80, backgroundColor: '#7c3aed', elevation: 8 }}
      >
        <MaterialIcons name="add" size={32} color="#fff" />
      </Pressable>
    </View>
  );
}
